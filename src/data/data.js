const data =
  fetch('http://localhost:8000/pizza')
  .then(res => {
    return res.json()
  })
  .then(data =>{
    return (data);
  })


export default data;
