import React from 'react';
import renderer from 'react-test-renderer';
import SearchMovie from "./SearchMovie"
import * as redux from "react-redux";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') ,
    useNavigate: jest.fn(),
    URLSearchParams : jest.fn()
 }));

test('renders correctly', () => {
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
  const mockDispatchFn = jest.fn()
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
  const mockSelectorFn = jest.fn()
  useSelectorSpy.mockReturnValue(mockSelectorFn);
    

  const tree = renderer.create(<SearchMovie />).toJSON();
  expect(tree).toMatchSnapshot();
  });
