function getTheEmojis(){
    fetch('https://emojihub.yurace.pro/api/random')
    .then((response)=> response.json())
    .then((data)=>{
        const newElement = document.createElement('tr');
        let name = data.name;
        let category = data.category;
        let group = data.group;
        let htmlCode = (data.htmlCode[0])
        let unicode = data.unicode;

        let randomValues = {
            name,
            category,
            group,
            htmlCode,
            unicode,
        }                       

        newElement.innerHTML = `
        <td>${name}</td>
        <td>${category}</td>
        <td>${group}</td>
        <td>${htmlCode}</td>
        <td>${unicode}</td>
        `
        document.getElementById('appenToTableBody').appendChild(newElement);
    })
    .catch((error)=> alert("Error occured unfortunately"))
}