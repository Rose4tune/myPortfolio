import { useEffect, useState } from "react";
import supabase from "./supabase";

const getData = (table) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data: response, error } = await supabase.rpc(
      `get_${table === "skills" ? `${table}_by_category` : table}`
    );

    if (error) throw error;
    if (!data) throw new Error(`${table} 데이터를 찾을 수 없습니다.`);

    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default getData;
