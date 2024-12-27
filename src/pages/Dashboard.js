import React, { useEffect, useRef, useState } from "react";
import useFetch from "../components/customhooks/useFetch";
import Card from "../components/Card/Card";
import CardShimmer from "../components/Shimmer/CardShimmer";
const Dashboard = () => {
  const { getData } = useFetch();
  const [showShimmer, setShowShimmer] = useState(false);
  const [memes, setMemes] = useState([]);
  const fetchCalled = useRef(false);

  const fetchMeme = async () => {
    setShowShimmer(true);
    const data = await getData("https://meme-api.com/gimme/20");
    setShowShimmer(false);
    setMemes((prev) => [...prev, ...data.memes]);
  };
  useEffect(() => {
    if (!fetchCalled.current) {
      fetchCalled.current = true;
      fetchMeme();
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMeme();
    }
  };
  return (
    <div>
      <h1 className="text-3xl mt-3 text-center">Memes Card</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {memes?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        {showShimmer && <CardShimmer />}
      </div>
    </div>
  );
};

export default Dashboard;
