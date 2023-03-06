/* eslint-disable no-unused-vars */
import { Pagination, Table } from '@juniorv/dashboard-uitest';
import { useMemo, useState, useEffect, ChangeEvent } from 'react';

import { InputDefault } from '../form/styles';
import { TableProps } from '../types/types';
import {
  AddNewButton,
  Container,
  ContainerInput,
  ContainerRoot,
  ContainerTable,
  HeaderContainer,
  PaginationContainer,
  PlusIcon,
  SearchButton,
  SearchContainer,
} from './styles';

interface ListProps<T, K extends keyof T> {
  title?: string;
  onChangeSearch: (value: string) => void;
  onOpenModal: () => void;
  table: TableProps<T, K>;
  pageSize?: number;
}

function ListScreen<T, K extends keyof T>({
  title,
  onChangeSearch,
  onOpenModal,
  table,
  pageSize = 10,
}: ListProps<T, K>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState<string>('');

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement> | undefined) => {
    if (event) {
      setSearch(event.target.value);
    }
  };

  useEffect(() => {
    if (search) {
      onChangeSearch(search);
    }
  }, [search]);

  const rows = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return table.data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  console.log({ rows });

  return (
    <ContainerRoot className="container-fluid">
      <Container>
        <HeaderContainer>
          <SearchContainer>
            <ContainerInput>
              <InputDefault
                size="full"
                placeholder="Search for name or email"
                name="searchLinks"
                legend="Search"
                value={search}
                onChange={handleOnSearch}
              />
            </ContainerInput>
            <SearchButton onClick={handleOnSearch}>Search</SearchButton>
          </SearchContainer>
          <AddNewButton onClick={onOpenModal}>
            <>
              <PlusIcon />
              <span className="label">New {title}</span>
            </>
          </AddNewButton>
        </HeaderContainer>
      </Container>

      <ContainerTable>
        <Table columns={table.columns} data={rows} />
      </ContainerTable>
      <PaginationContainer>
        <Pagination
          totalItems={table.data.length}
          pageSize={10}
          currentPage={currentPage}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </PaginationContainer>
    </ContainerRoot>
  );
}

export default ListScreen;
