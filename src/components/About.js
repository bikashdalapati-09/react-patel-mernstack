import { useEffect, useState } from "react"
import Skeleton from "./Skeleton";

function About() {
  const [data, setData] = useState(null)


  useEffect( () => {
    getData();
  }, [])
  const getData = async () => {
    const info = await fetch('https://api.github.com/users/bikashdalapati-09');
    const resData = await info.json()
    setData(resData);
    console.log(resData);
  }
  
  
  if(data === null){
    return <Skeleton/>
  }

  return (
    <div className="">
        <>
          <img src={data.avatar_url} width="100" />
          <p>Name: {data.name}</p>
          <p>Username: {data.login}</p>
        </>
    </div>
  );
}

export default About