import { Button, Editable, IconButton } from '@chakra-ui/react';
import { info } from 'console';
import { useEffect, useState } from 'react';
import { LuCheck, LuPencilLine, LuX } from 'react-icons/lu';
import { buttonStyle } from '../styles';

export default function EditableName({value, toggleTimer, resetTimer, addRow}: {id:any, value:any, toggleTimer: any, resetTimer:any, addRow:any}) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {setLocalValue(value)}, [value])

  return (
    <>
        <Button {...buttonStyle} onClick={toggleTimer}>
        {localValue}
    </Button>
    <Button {...buttonStyle} onClick={resetTimer}>
        Reset
    </Button>
    <Button {...buttonStyle} onClick={() => console.log("add row after id: "+id)}>
        Add
    </Button>
    </>
  );
}
