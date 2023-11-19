import loadingFlagsReducer, {
  changeLoadingFlagsDetails,
  changeLoadingFlagsMain,
} from '../loadingFlagsSlice';

describe('Test for the loadingFlagsSlice', () => {
  const loadingFlagsReducerState = {
    main: {
      isLoading: false,
      isFetching: false,
      isSuccess: false,
    },
    details: {
      isLoading: false,
      isFetching: false,
      isSuccess: false,
    },
  };

  it('should return default state when passed an empty action', () => {
    const result = loadingFlagsReducer(loadingFlagsReducerState, { type: '' });

    expect(result).toEqual(loadingFlagsReducerState);
  });

  it('should add new main loading flags with "changeLoadingFlagsMain" action', () => {
    const action = {
      type: changeLoadingFlagsMain.type,
      payload: {
        isLoading: true,
        isFetching: true,
        isSuccess: true,
      },
    };

    const result = loadingFlagsReducer(loadingFlagsReducerState, action);

    expect(result.main.isFetching).toBe(true);
    expect(result.main.isLoading).toBe(true);
    expect(result.main.isSuccess).toBe(true);
  });

  it('should add new details loading flags with "changeLoadingFlagsDetails" action', () => {
    const action = {
      type: changeLoadingFlagsDetails.type,
      payload: {
        isLoading: true,
        isFetching: true,
        isSuccess: true,
      },
    };

    const result = loadingFlagsReducer(loadingFlagsReducerState, action);

    expect(result.details.isFetching).toBe(true);
    expect(result.details.isLoading).toBe(true);
    expect(result.details.isSuccess).toBe(true);
  });
});
