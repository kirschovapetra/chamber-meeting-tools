'use client';

import {
  ActionBar,
  Box,
  Button,
  Checkbox,
  Flex,
  IconButton,
  Kbd,
  Portal,
  Table,
} from '@chakra-ui/react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { buttonStyle } from '../styles';
import EditableName from './editable-name';
import { LuX } from 'react-icons/lu';

export default function GenericTable(d: TimerRow[]) {
  const columnHelper = createColumnHelper<TimerRow>();
  const [data, setData] = useState<TimerRow[]>([
    {
      time: '19:15',
      role: 'Chairperson',
      speakerName: 'Petra Kirschova',
      greenTime: '4:00',
      amberTime: '5:00',
      redTime: '6:00',
      resultTime: '0:00',
      status: 'Start',
    },
    {
      role: 'Toastmaster',
      speakerName: 'Dzvinka Plaksii',
      greenTime: '6:00',
      amberTime: '7:00',
      redTime: '8:00',
      resultTime: '0:00',
      status: 'Start',
    },
    {
      role: 'Timer',
      speakerName: 'Petra Kirschova',
      greenTime: '1:00',
      amberTime: '1:30',
      redTime: '2:00',
      resultTime: '0:00',
      status: 'Start',
    },
    // {
    //   role: 'Ah Counter',
    //   speakerName: 'Svitlana Sydorenko',
    //   greenTime: '1:00',
    //   amberTime: '1:30',
    //   redTime: '2:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Grammarian',
    //   speakerName: 'Nicolas Macak',
    //   greenTime: '1:00',
    //   amberTime: '1:30',
    //   redTime: '2:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Zoom Spotlight',
    //   speakerName: 'Benjamin Oommen',
    //   redTime: '1:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   time: '19:36',
    //   role: 'Toastmaster',
    //   speakerName: 'Dzvinka Plaksii',
    //   greenTime: '1:00',
    //   amberTime: '1:30',
    //   redTime: '2:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Speaker 1',
    //   speakerName: 'Camilo Correa',
    //   greenTime: '5:00',
    //   amberTime: '6:00',
    //   redTime: '7:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Break',
    //   speakerName: '',
    //   redTime: '1:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Speaker 2',
    //   speakerName: 'Nicolas Macak',
    //   greenTime: '5:00',
    //   amberTime: '6:00',
    //   redTime: '7:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Break',
    //   speakerName: '',
    //   redTime: '1:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   time: '19:46',
    //   role: 'Table Topic Master',
    //   speakerName: 'Scott Clark',
    //   greenTime: '13:00',
    //   amberTime: '14:00',
    //   redTime: '15:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Break',
    //   speakerName: '',
    //   redTime: '1:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   time: '20:12',
    //   role: 'Toastmaster',
    //   speakerName: 'Dzvinka Plaksii',
    //   greenTime: '1:00',
    //   amberTime: '1:30',
    //   redTime: '2:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   time: '20:12',
    //   role: 'Evaluator 1',
    //   speakerName: 'Karolina Sulcova',
    //   greenTime: '2:00',
    //   amberTime: '2:30',
    //   redTime: '3:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Evaluator 2',
    //   speakerName: 'Scott Clark',
    //   greenTime: '2:00',
    //   amberTime: '2:30',
    //   redTime: '3:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Table Topics Evaluator',
    //   speakerName: 'Benjamin Oommen',
    //   greenTime: '3:00',
    //   amberTime: '4:00',
    //   redTime: '5:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Break',
    //   speakerName: '',
    //   redTime: '1:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   time: '20:25',
    //   role: 'Toastmaster',
    //   speakerName: 'Dzvinka Plaksii',
    //   greenTime: '1:00',
    //   amberTime: '1:30',
    //   redTime: '2:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },

    // {
    //   role: 'Grammarian',
    //   speakerName: 'Nicolas Macak',
    //   greenTime: '3:00',
    //   amberTime: '4:00',
    //   redTime: '5:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Timer',
    //   speakerName: 'Petra Kirschova',
    //   greenTime: '',
    //   amberTime: '',
    //   redTime: '1:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Ah Counter',
    //   speakerName: 'Svitlana Sydorenko',
    //   greenTime: '',
    //   amberTime: '',
    //   redTime: '1:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'General Evaluator',
    //   speakerName: 'Liubov Tysovska',
    //   greenTime: '6:00',
    //   amberTime: '7:00',
    //   redTime: '8:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   role: 'Toastmaster',
    //   speakerName: 'Dzvinka Plaksii',
    //   greenTime: '1:00',
    //   amberTime: '1:30',
    //   redTime: '2:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
    // {
    //   time: '20:43',
    //   role: 'Chairperson',
    //   speakerName: 'Petra Kirschova',
    //   greenTime: '',
    //   amberTime: '',
    //   redTime: '1:00',
    //   resultTime: '0:00',
    //   status: 'Start',
    // },
  ]);

  const [selection, setSelection] = useState<string[]>([]);
  const hasSelection = selection.length > 0;

  const toggleTimer = (info: any) => {
    const dataObjIdx = info.row.index;
    const dataObj = data.at(dataObjIdx);
    if (dataObj !== undefined) {
      dataObj.status = dataObj.status == 'Start' ? 'Stop' : 'Start';
      setData(
        data.map((val, i) => {
          return i == dataObjIdx ? dataObj : val;
        }),
      );
    }
  };
  const setSpeakerName = (info: any, value: any) => {
    const dataObjIdx = info.row.index;
    const dataObj = data.at(dataObjIdx);
    if (dataObj !== undefined) {
      dataObj.speakerName = value;
      setData(
        data.map((val, i) => {
          return i == dataObjIdx ? dataObj : val;
        }),
      );
    }
  };
  const resetTimer = (info: any) => {
    const dataObjIdx = info.row.index;
    const dataObj = data.at(dataObjIdx);
    if (dataObj !== undefined) {
      dataObj.status = 'Start';
      dataObj.resultTime = '0:00';
      setData(
        data.map((val, i) => {
          return i == dataObjIdx ? dataObj : val;
        }),
      );
    }
  };
  const deleteSelectedRows = () => {
    setData(data.filter((val, i) => !selection.includes(i.toString())));
    setSelection([]);
  };

  const addRow = () => {
    setData([
      ...data,
      {
        time: '',
        role: '',
        speakerName: '0:00',
        greenTime: '0:00',
        amberTime: '0:00',
        redTime: '0:00',
        resultTime: '0:00',
        status: 'Start',
      },
    ]);
    setSelection([]);
  };

  const columns = [
    columnHelper.accessor('checkbox', {
      header: '',
      cell: (info: any) => {
        return (
          <Checkbox.Root
            size='sm'
            top='0.5'
            aria-label='Select row'
            checked={selection.includes(info.row.id)}
            onCheckedChange={(changes) => {
              setSelection((prev) =>
                changes.checked
                  ? [...prev, info.row.id]
                  : selection.filter((id) => id !== info.row.id),
              );
            }}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
        );
      },
    }),
    columnHelper.accessor('time', {
      header: 'Time',
      cell: (info: { getValue: () => any }) => info.getValue(),
    }),
    columnHelper.accessor('role', {
      header: 'Role',
      cell: (info: any) => info.getValue(),
    }),
    columnHelper.accessor('speakerName', {
      header: 'Speaker',
      cell: (info: any) => {
        return (
          <EditableName
            name={info.getValue()}
            setSpeakerName={(val: any) => {
              setSpeakerName(info, val);
            }}
          />
        );
      },
    }),
    columnHelper.accessor('greenTime', {
      header: 'Green',
      cell: (info: any) => info.getValue(),
    }),
    columnHelper.accessor('amberTime', {
      header: 'Amber',
      cell: (info: any) => info.getValue(),
    }),
    columnHelper.accessor('redTime', {
      header: 'Red',
      cell: (info: any) => info.getValue(),
    }),
    columnHelper.accessor('resultTime', {
      header: 'Result Time',
      cell: (info: any) => info.getValue(),
    }),
    columnHelper.accessor('status', {
      header: '',
      cell: (info: any) => {
        return (
          <>
            <Button {...buttonStyle} onClick={() => toggleTimer(info)}>
              {info.getValue()}
            </Button>
            <Button {...buttonStyle} onClick={() => resetTimer(info)}>
              Reset
            </Button>
            <Button {...buttonStyle} onClick={() => console.log("add row after id: "+info.row.id)}>
              Add
            </Button>
          </>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <Table.ScrollArea>
        <Table.Root interactive size='sm' variant='line' native>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row bg='bg.subtle' key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <Table.ColumnHeader key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {table.getRowModel().rows.map((row) => (
              <Table.Row
                key={row.id}
                data-selected={selection.includes(row.id) ? '' : undefined}
                onMouseOver={()=>{showButton(row.id, true)}}
                onMouseLeave={()=>{showButton(row.id, false)}}
              >
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>

      <ActionBar.Root open={hasSelection}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                {selection.length} selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant='outline' size='sm' onClick={deleteSelectedRows}>
                Delete <LuX />
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  );
}
