const activeDebounce = (setActive: React.Dispatch<React.SetStateAction<boolean>>, time: number) => {
  setActive(true);
  setTimeout(() => {
    setActive(false);
  }, time);
};

export { activeDebounce };
