import { createSlice, current } from "@reduxjs/toolkit";
import { arrCardImg } from "../../arrCardImg/arrCardImg";

const initialState = {
  cardArray: [],
  checkElements: [],
};

const memorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    setCard: (state) => {
      for (let i = 0; i < arrCardImg.length; i++) {
        state.cardArray.push(
          {
            id: i,
            name: arrCardImg[i].name,
            img: arrCardImg[i].img,
            visible: false,
            successful: false,
          },
          {
            id: i + arrCardImg.length,
            name: arrCardImg[i].name,
            img: arrCardImg[i].img,
            visible: false,
            successful: false,
          }
        );
      }
      state.cardArray.sort(() => Math.random() - 0.5);
    },
    checkCards: (state, { payload }) => {
      const choosElemet = () => {
        const itemsCard = document.querySelectorAll(".Card");

        const toggleClassVisible = () => {
          let index = -1;
          state.cardArray.map((item) => {
            index++;
            if (item.id === payload.id && !item.successful) {
              itemsCard[index].classList.toggle("visible");
              state.checkElements.push({ id: item.id, name: payload.name });
            }
          });
        };
        const addClassSuccessful = () => {
          if (
            state.checkElements.length === 2 &&
            state.checkElements[0].id !== state.checkElements[1].id
          ) {
            if (state.checkElements[0].name === state.checkElements[1].name) {
              state.cardArray.map((item) => {
                if (
                  item.id === state.checkElements[0].id ||
                  item.id === state.checkElements[1].id
                ) {
                  item.successful = true;
                }
              });
            } else {
              setTimeout(() => {
                itemsCard.forEach((item) => {
                  item.classList.remove("visible");
                });
              }, 700);
            }
            state.checkElements = [];
          } else if (
            state.checkElements.length === 2 &&
            state.checkElements[0].id === state.checkElements[1].id
          ) {
            state.checkElements = [];
          }
        };
        toggleClassVisible();
        addClassSuccessful();
      };
      choosElemet();
    },
  },
});

export const { setCard, checkCards } = memorySlice.actions;

export default memorySlice.reducer;
