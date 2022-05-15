import React from "react";
import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";
import { Spinner } from "react-bootstrap";

export default function Movies() {
  const { loading, loadginNextPage, cards, totalPages, page, setPage, setCat } = useCards({ content: "movies" });

  return <>
    {loading
      ? <Spinner animation="border" className="loading" />

      : <ListOfCards cards={cards} contentType='movies' setPage={setPage} page={page} setCat={setCat} totalPages={totalPages} loadingNextPage={loadginNextPage} />
    }
  </>;
}
