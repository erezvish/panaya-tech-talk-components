export const getList = () => {
  return new Promise((resolve, reject) => {
    const randomRequestTime = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve( ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']);
    }, randomRequestTime);
  })
};

