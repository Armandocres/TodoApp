const onClickButtom = (text) => {
  console.log(text);
}

const onSearchButtom = (event, setSearchValue) => {
  const value = event.target.value
  console.log(event.target.value);
  setSearchValue(value);
}

export { onClickButtom, onSearchButtom }