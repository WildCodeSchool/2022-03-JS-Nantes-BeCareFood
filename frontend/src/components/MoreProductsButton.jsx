import axios from "axios";
import { useState, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import Loading from "./Loading";

function MoreProductsButton() {
  const { setProducts, searchValue } = useContext(ProductContext);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getPage = () => {
    setIsLoading(true);
    const newPage = page + 1;
    setPage(page + 1);
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=${newPage}`
      )
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false);
        setProducts((prod) => [...prod, ...data.products]);
      });
    setPage(page + 1);
  };

  return (
    <div>
      <button type="button" onClick={getPage}>
        Voir + de produits
      </button>
      {isLoading && <Loading />}
    </div>
  );
}

export default MoreProductsButton;