module.exports = {
  user_login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb)  cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.role = res.role
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
  custom_login(email,pass,role,cb){
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb)  cb(true)
      this.onChange(true)
      return
    }
    pretendRequest1(email,pass,(res) => {
      console.log(res)
      if (res.authenticated) {
        localStorage.role = res.role
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },
getRole(){
  return localStorage.role==undefined?'0':localStorage.role;
},
  logout(cb) {
    delete localStorage.token
    delete localStorage.username
    delete localStorage.role
    console.log(localStorage)
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {},
  myact(val,cb) {
    var to = val['to']
    var parms = val['parms']
    var  url = 'http://123.56.133.208:8080/myfd/'+to+'?'
    parms.map(parm=>{
      if(String(parm.value).length>0){ 
        url +=parm.key+'='+parm.value+'&'
      }
   
  })
  url = url + '&user_name='+this.getUsername()  
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
  
},
//get('',{"role":'333'},function(res){
//            console.log(res)
//        }) 
      get(apipath,data,cb) {
        var  url = 'http://123.56.133.208:8080/myfd/'
        url = url+apipath+'?'
        for (let k of Object.keys(data)){
            url = url + k + '=' + data[k]+'&'
        }
        url = url + '&user_name='+this.getUsername()
        fetch(url,{
            mode:'cors'
        })
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

    },
    post(apipath,form,cb) {
        //var f = document.getElementById('myform');
        //var form = new FormData(f)
        //for (let k of Object.keys(data)){
        //    form.append(k,data[k])
        //}
        //form.append("userfile", fileInputElement.files[0]);
        form.append('user_name',this.getUsername())  
        var  url = 'http://123.56.133.208:8080/myfd/'      
        url = url+apipath       
        fetch(url,{
            method:'POST',
            body:form,
            mode:'cors'
        })
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
        role:data.role,
        authenticated: true,
        token: Math.random().toString(36).substring(7),
      })
        }else {
        cb({ authenticated: false })
        alert(data['result'])          
        }
        
      })
      .catch(error => {
        console.log('Request failed: ', error)
      });
  }
  function pretendRequest1(email, pass, cb) {
  localStorage.username = email
  fetch('http://123.56.133.208:8080/myfd/adminLogin.do?username'+'='+email+'&'+'password'+'='+pass+'&'+'role'+'=5')
      .then(checkStatus)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        if(data['result']=='true'){
          cb({
        role:data.role,
        authenticated: true,
        token: Math.random().toString(36).substring(7),
      })
        }else {
        cb({ authenticated: false })
        alert(data['result'])          
        }
        
      })
      .catch(error => {
        console.log('Request failed: ', error)
      });
  }


