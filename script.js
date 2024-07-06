const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="1234567890";
const symbolset="~!@#$%^&*()_+";


const passbox=document.querySelector("#pass-box");
const totalchar=document.querySelector("#total-char");
const upper=document.querySelector("#upper-case");
const lower=document.querySelector("#lower-case");
const numb=document.querySelector("#number");
const symbols=document.querySelector("#symbols");
const btn=document.querySelector("#btn");


function getrandom(set)
{
return set[Math.floor(Math.random()*set.length)];
}

const generatepass=(password="")=>{
    if(upper.checked)
    {
        password +=getrandom(upperset);
    }
    if(lower.checked)
        {
            password +=getrandom(lowerset);
        }
        if(numb.checked)
            {
                password +=getrandom(numberset);
            }
            if(symbols.checked)
                {
                    password +=getrandom(symbolset);
                }
                if(password.length < totalchar.value)
                {
                 return generatepass(password);
                }

passbox.innerText=truncatestring(password,totalchar.value);
}
btn.addEventListener("click",()=>{
    generatepass();
});



function truncatestring(str,num)
{
    if(str.length>num)
    {
        let substr=str.substring(0,num);
        return substr;
    }
    else{
        return str; 
    }
}

