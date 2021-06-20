import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'basicAssembler', text: 'Basic Furniture Assembler', value: 'basicAssembler' },
  { key: 'advancedAssembler', text: 'Professional Furniture Assembler', value: 'advancedAssembler' },
  { key: 'basicCooker', text: 'Basic Cooking', value: 'basicCooker' },
  { key: 'advancedCooker', text: 'Professional Cooking', value: 'advancedCooker' },
  { key: 'basicPhoto', text: 'Basic Photographer', value: 'basicPhoto' },
  { key: 'advancedPhoto', text: 'Professional Photographer', value: 'advancedPhoto' },
  { key: 'babysitter', text: 'Babysitter', value: 'babysitter' },
  { key: 'accountant', text: 'Accountant', value: 'accountant' },
  { key: 'financial', text: 'Financial Planner', value: 'financial' },
  { key: 'mech', text: 'Mechanical', value: 'mech' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'plumbing', text: 'Plumber', value: 'plumbing' },
  { key: 'software', text: 'Software Engineer', value: 'software' },
  { key: 'musician', text: 'Musician', value: 'musician' },
  { key: 'writer', text: 'Writer', value: 'writer' },
  { key: 'gardener', text: 'Gardener', value: 'gardener' },
  { key: 'design', text: 'Interior Designer', value: 'design' },
  { key: 'yoga', text: 'Yoga Instructor', value: 'yoga' },
]

const handleDropDownSelect = (event, {value}) => {
    console.log(value);
    let skills = event.target.textContent;
    console.log(skills);
}

const DropdownSkillsSelection = () => (
  <Dropdown onChange={handleDropDownSelect}  placeholder='Skills' name='skills' fluid multiple selection options={options} />
)

export default DropdownSkillsSelection