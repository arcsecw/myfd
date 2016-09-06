    export const myiso ={
        constructor () {
        var fso, ts, s ; 
        var ForReading = 1; 

        fso = new ActiveXObject("Scripting.FileSystemObject"); 
        ts = fso.OpenTextFile("d:\\1.txt", ForReading); 
        s = ts.ReadLine(); 
        return s;
    }
    } 