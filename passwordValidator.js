document.addEventListener("DOMContentLoaded", () => {
  let password0 = document.querySelector("#password0");
  let password1 = document.querySelector("#password1");


  document.querySelector("#button").addEventListener("click",(e) =>{
    console.log('click');
    console.log('password0', password0.value);
    console.log('password1', password1.value);

    let string0 = password0.value.toString();
    let string1 = password1.value.toString();

    if(string0 != string1)
    {
        document.querySelector("#message").innerText = "Passwords do not match";
    }
    else if (string0.length < 8)
    {
      document.querySelector("#message").innerText = "Password must be at least 8 characters long";
    }

    else
    {
        document.querySelector("#message").innerText = "Password validated";
    }
  })
})
