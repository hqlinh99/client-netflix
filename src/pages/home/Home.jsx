import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import listAction from "../../redux/lists/actions/listsActions";
import { axiosPrivate } from "../../server/requestMethods";

const Home = ({ type }) => {
  const dispatch = useDispatch();

  const [genre, setGenre] = useState(null);
  const { accessToken } = useSelector((state) => state.authData.currentUser);
  const { lists } = useSelector((state) => state.listData);

  useEffect(() => {
    dispatch(
      listAction.getListsRandomStart({ type, genre, accessToken, axiosPrivate })
    );
  }, [dispatch, type, genre, accessToken]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      <div className="lists" key={lists}>
        {lists?.map((list) => (
          <List list={list} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
