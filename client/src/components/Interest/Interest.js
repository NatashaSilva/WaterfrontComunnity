import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'book', text: 'Books', value: 'book' },
  { key: 'camping', text: 'Camping', value: 'camping' },
  { key: 'cooking', text: 'Cooking', value: 'cooking' },
  { key: 'cycling', text: 'Cycling', value: 'cycling' },
  { key: 'dancing', text: 'Dancing', value: 'dancing' },
  { key: 'gardening', text: 'Gardening', value: 'gardening' },
  { key: 'hiking', text: 'Hiking', value: 'hiking' },
  { key: 'indoor', text: 'Indoor Sports', value: 'indoor' },
  { key: 'languages', text: 'Learning Languages', value: 'languages' },
  { key: 'movie', text: 'Movies', value: 'movie' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'outdoor', text: 'Outdoor Sports', value: 'outdoor' },
  { key: 'painting', text: 'Painting', value: 'painting' },
  { key: 'travel', text: 'Traveling', value: 'travel' },
  { key: 'winter', text: 'Winter Activities', value: 'winter' },
  { key: 'writing', text: 'Writing', value: 'writing' },
  { key: 'yoga', text: 'Yoga', value: 'yoga' },
]

const handleDropDownSelectInterest = (event, {value}) => {
    console.log(value);
    let skills = event.target.textContent;
    console.log(skills);
}

const DropdownInterestSelection = () => (
  <Dropdown onChange={handleDropDownSelectInterest} name='interest' placeholder='Interest' fluid multiple selection options={options} />
)

export default DropdownInterestSelection