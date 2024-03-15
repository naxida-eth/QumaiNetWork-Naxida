import React, { useMemo } from "react";
import styled from "styled-components";
import { Column, useTable } from "react-table";

interface Data {
  imgs: string;
  vaults: {
    h3: string;
    span: string;
  };
  deposite: string;
  apy: string;
  daily: string;
  tvl: string;
}

const vaultsData = [
  {
    h3: "BTC Vault",
    span: "Avalon-xxxx",
  },
  {
    h3: "BTC2 Vault",
    span: "Avalon-xxxx",
  },
  {
    h3: "BTC3 Vault",
    span: "Avalon-xxxx",
  },
];

const Vaults = () => {
  console.log({
    arr: new Array(3).fill(0),
  });

  const data: Data[] = useMemo(() => {
    const list = [0, 1, 2];
    return list.map((item, index) => {
      return {
        imgs: "",
        vaults: vaultsData[index],
        deposite: "0.00",
        apy: "--",
        daily: "--",
        tvl: "$0",
      };
    });
  }, []);

  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: "imgs",
        accessor: "imgs",
      },
      {
        Header: "vaults",
        accessor: "vaults",
        Cell: ({ value }) => {
          return (
            <>
              <p>{value.h3}</p>
              <span>{value.span}</span>
            </>
          );
        },
      },
      {
        Header: "deposite",
        accessor: "deposite",
        Cell: ({ value }) => value,
      },
      {
        Header: `apy`,
        accessor: "apy",
      },
      {
        Header: `daily`,
        accessor: "daily",
      },
      {
        Header: `tvl`,
        accessor: "tvl",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    tableInstance;
  return (
    <StyledContainer>
      <StyledContainerTop>
        <h3>Vaults</h3>
        <StyledImgsBox>
          <img src="" alt="" />
          <img src="" alt="" />
        </StyledImgsBox>
      </StyledContainerTop>
      <StyledContaienrMain>
        <StyledTable {...getTableProps()}>
          <StyledTHead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => {
                      // console.log("column", column);
                      return (
                        // Apply the header cell props
                        <th {...column.getHeaderProps()}>
                          {
                            // Render the header
                            column.render("Header")
                          }
                        </th>
                      );
                    })
                  }
                </tr>
              ))
            }
          </StyledTHead>
          <StyledTBody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </StyledTBody>
        </StyledTable>
      </StyledContaienrMain>
    </StyledContainer>
  );
};

export default Vaults;

const StyledTHead = styled.thead`
  --pc-table-space-negative: -25px;

  position: relative;
  height: 2.5rem;
  border-radius: 9px;

  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  th {
    padding: 6px 5px 6px;
  }

  th:nth-child(-n + 4) {
    width: 20%;
  }

  th:last-child {
    width: 20%;
  }

  th:first-child {
    width: 10%;
  }
`;

const StyledTBody = styled.tbody`
  text-align: center;

  display: block;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  > tr:not(:last-child) {
    height: 2.8rem;
    border-bottom: 1px solid rgb(112, 112, 112);
  }
  td {
    max-width: 300px;
    line-break: anywhere;
  }

  td:nth-child(-n + 4) {
    width: 20%;
  }

  td:last-child {
    width: 20%;
    line-break: auto;
  }

  td:first-child {
    width: 10%;
  }

`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td {
    padding: 6px 5px 6px;
  }
`;

const StyledImgsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;

  img {
    height: 20px;
    width: 20px;
  }

  border: 1px solid white;
  background: #777777;
`;

const StyledContaienrMain = styled.div``;

const StyledContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  border-bottom: 1px solid white;
`;

const StyledContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
`;
