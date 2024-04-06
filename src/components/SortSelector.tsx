import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortValue: string) => void;
  sortOrder: string;
}
const sortSelectors = [
  { value: '', label: 'Relevance' },
  { value: '-released', label: 'Released date' },
  { value: 'name', label: 'Name' },
  { value: '-added', label: 'Date Added' },
  { value: '-created', label: 'Date Created' },
  { value: '-rating', label: 'Average Rating' },
  { value: '-updated', label: 'Updated' },
  { value: '-metacritic', label: 'Popularity' },
];

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
  const selectedSortOrder = sortSelectors.find(
    (sortData) => sortData.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {selectedSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortSelectors.map((sortData) => (
          <MenuItem
            key={sortData.value}
            value={sortData.value}
            onClick={() => onSelectSortOrder(sortData.value)}
          >
            {sortData.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
