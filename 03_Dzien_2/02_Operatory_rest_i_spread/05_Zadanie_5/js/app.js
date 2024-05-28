const state = {
  invoiceSection: false,
  availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
  formStatus: 'failed',
  isUserLogged: false,
};

const stateCopy = {
  ...state,
  isUserLogged: true,
  availableYears: state.availableYears.filter((year) => year <= 1999),
};

console.log(state);
console.log(stateCopy);



//lub
// const state = {
//   invoiceSection: false,
//   availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
//   formStatus: 'failed',
//   isUserLogged: false,
// };
//
// const stateCopy = {...state};
//
// stateCopy.isUserLogged = true;
//
//
// stateCopy.availableYears = stateCopy.availableYears.filter(year => year <= 1999);
//
// console.log("state", state);
// console.log("stateCopy", stateCopy);
