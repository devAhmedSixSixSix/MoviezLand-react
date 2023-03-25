import React from "react";
import { useParams } from "react-router-dom";
import ActorDetils from "../components/ActorDetils";
import ActorCreidt from "../components/ActorCreidt";
import {
  useGetActorCreidtQuery,
  useGetActorDetilsQuery,
} from "../features/apiMoviesSlice/apiMoviesSlice";

const Actor = () => {
  window.scrollTo(0, 0);
  const id = useParams();
  const { data: actorDetils } = useGetActorDetilsQuery(id.id);
  const { data: actorCredit } = useGetActorCreidtQuery(id.id);
  return (
    <div>
      <ActorDetils actorDetils={actorDetils} />
      <ActorCreidt actorCredit={actorCredit} />
    </div>
  );
};

export default Actor;
