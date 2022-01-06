import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const { accessToken } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await userRequest.get(
          `/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre, accessToken]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      <div className="lists">
        {lists.map((list) => (
          <List list={list} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
