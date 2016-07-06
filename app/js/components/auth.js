module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },
  getUsername() {
    return localStorage.username
  },

  logout(cb) {
    delete localStorage.token
    delete localStorage.username
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {},
  myact(val,cb) {
    console.log(val)
    var to = val['to']
    var parms = val['parms']
    var  url = 'http://123.56.133.208:8080/myfd/'+to+'?'
    parms.map(parm=>{
    url +=parm.key+'='+parm.value+'&'
  })
  fetch(url)
      .then(checkStatus)
      .then(res => {
        return res.json();
      })
      .then(data => {
        cb(data)
        
      })
      .catch(error => {
        console.log('Request failed: ', error)
      });
  
}
}
function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
function pretendRequest(email, pass, cb) {
  localStorage.username = email
  fetch('http://123.56.133.208:8080/myfd/login.do?username'+'='+email+'&'+'password'+'='+pass+'&'+'role'+'=1')
      .then(checkStatus)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        if(data['result']=='true'){
          cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7),
      })
        }else {
        cb({ authenticated: false })          
        }
        
      })
      .catch(error => {
        console.log('Request failed: ', error)
      });
    if (email === 'admin' && pass === 'admin') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }


