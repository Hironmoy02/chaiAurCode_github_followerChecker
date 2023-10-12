import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Hironmoy02")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4">
      Github followers : {data.followers}
      <img src={data.avatar_url} width={300} />
    </div>
  );
}

export default Github;
