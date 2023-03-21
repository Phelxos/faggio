import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import IModal from "../typings/interfaces/IModas";

interface Interface extends IModal {
  displayModal: (props: IModal) => void;
  isDisplayingModal: boolean;
  toggleModal: () => void;
}

const useModal = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        isDisplayingModal: true,
        toggleModal: () =>
          set((state) => ({ isDisplayingModal: !state.isDisplayingModal })),
        title: "Titel des Dialogs",
        descriptionShort: "Eine kurze Zusammenfassung des Dialogs",
        descriptionLong:
          "Hier sollte eine längere Zusammenfassung des Dialogs stehen. Erklären sie ausführlich, worum es in diesem Dialog gehen soll.",
        buttonAcceptLabel: "annehmen",
        onButtonAcceptClick: () => {},
        buttonDeclineLabel: "ablehnen",
        onButtonDeclineClick: () => {},
        displayModal: ({
          title,
          descriptionShort,
          descriptionLong,
          buttonAcceptLabel,
          onButtonAcceptClick,
          buttonDeclineLabel,
          onButtonDeclineClick,
        }) => {
          set((state) => ({
            title,
            descriptionShort,
            descriptionLong,
            buttonAcceptLabel,
            buttonDeclineLabel,
            onButtonAcceptClick: () => {
              onButtonAcceptClick();
              state.toggleModal();
            },
            onButtonDeclineClick: () => {
              onButtonDeclineClick();
              state.toggleModal();
            },
          }));
        },
      }),
      {
        name: "modal",
      }
    )
  )
);

export default useModal;
