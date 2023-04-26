export const getUsers = state => state.user.users.items;
export const getError = state => state.user.users.error;
export const getIsLoading = state => state.user.isLoading;
export const getStatusFilter = state => state.user.filter;
export const selectIsRefreshing = state => state.user.isRefreshing;
export const getIsFollow = state => state.user.users.items.isFollow;


