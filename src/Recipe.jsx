const Recipe = () => {
    const[food, setFood] = useState([]);
    useEffect(()=>{
        fetch('food.json')
        .then(res => res.json())
        .then(data => setFood(data))
    }, [])
    return(
        <div>

        </div>
    )
}
export default Recipe;