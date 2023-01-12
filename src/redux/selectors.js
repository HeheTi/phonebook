export const selectFilter = state => state.filter;
export const selectItemsContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectAuthLoading = state => state.auth.loading;
export const selectAuthIsLoggedIn = state => !!state.auth.token;
export const selectAuthLoadingUser = state => state.auth.loadingUser;
export const selectAuthError = state => state.auth.loadingUser;
export const selectAuthToken = state => state.auth.token;
export const selectAuthUserName = state => state.auth.user.name;
