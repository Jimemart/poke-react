import React from "react"
import { shallow } from "enzyme"
import configureStore from "redux-mock-store"
import Pokemon from "../Pokemon"
import { ImageHolder } from "../ImageHolder"
import { Nature } from "../Nature"

describe("Pokemon test", () => {
  const mockStore = configureStore()

  const props = {
    onFetchPokemon: () => {},
    pokemon: {
      img: [["foo", "foo"]],
      name: "bar",
      weight: 3,
      height: 5,
      nature: [
        {
          name: "grass",
          color: "green",
        },
      ],
      isLoading: false,
    },
  }

  const initialState = {
    id: 1,
  }

  it("should render the pokemon info if loading is false", () => {
    const state = mockStore(initialState)
    const wrapper = shallow(<Pokemon {...props} store={state} />)
    expect(wrapper.find(Nature)).toHaveLength(1)
    expect(wrapper.find(ImageHolder)).toHaveLength(1)
  })

  it('should not render the pokemon info if loading is true', () => {
    props.isLoading = true
    const state = mockStore(initialState)
    const wrapper = shallow(<Pokemon {...props} store={state} />)
    expect(wrapper.find(Nature)).toHaveLength(0)
    expect(wrapper.find(ImageHolder)).toHaveLength(0)
  })
})
