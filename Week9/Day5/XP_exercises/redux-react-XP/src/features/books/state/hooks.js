import { useSelector } from "react-redux";
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from "../state/selectors";

export const allBooks = () => {
  return useSelector(selectBooks);
};

export const HorrorBooks = () => {
  return useSelector(selectHorrorBooks);
};

export const FantasyBooks = () => {
  return useSelector(selectFantasyBooks);
};

export const ScienceFictionBooks = () => {
  return useSelector(selectScienceFictionBooks);
};
