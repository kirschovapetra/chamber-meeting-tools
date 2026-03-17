"use client"
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export default function GlobalLayout ({title, children, reset=()=>{}, generatePdf=()=>{}}: {title:any, children?:React.ReactNode, reset?:any, generatePdf?:any}) {

  const getDate = () => {
    const dateObject = new Date();
    // UTC time 17:15:00
    dateObject.setUTCHours(17, 15, 0) 

    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    var format = new Intl.DateTimeFormat(
      undefined,
      {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
      }
    )
    return format.format(dateObject) + " " + localTimezone;

  }
  const buttonProps = {colorPalette:"teal", m:4, alignSelf:"flex-end"}

  return (
    <Box>
      <Heading size="2xl" textAlign={'center'}>{title}</Heading>
      <Heading size="md" textAlign={'center'}>{getDate()}</Heading>
      {children}
      <Flex justifyContent={'flex-end'}>
        <Button {...buttonProps} onClick={reset}>Reset</Button>
        <Button {...buttonProps} onClick={generatePdf}>Export PDF</Button>
      </Flex>
    </Box>
  );
};
