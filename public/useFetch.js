const useFetch=(url, callback)=>{
  const [loading, setLoading]=React.useState(false)

  const fetchData= async ()=>{
    setLoading(true)
    const response=await fetch(url)
    const data=await response.json();
    //console.log(data[0].todo)
    setLoading(false)
    callback(data)
  }
  React.useEffect(() => {
    fetchData()
  }, [])
  return loading
}