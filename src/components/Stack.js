import React from 'react';



const Stack = ({ children, divStyle, vertical = false }) => {
  const direction = vertical ? 'column' : 'row';
  const style = {
    ...divStyle,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: direction,
    // align-items: center;
    // width: 100%;
    // background-color: blue;
  }
  return (
    <div style={style}>{children}</div>
  )
}

export default Stack;

// import React from 'react';

// const Flex = ({
//   children,
//   direction = "row",
//   grow = false,
//   divStyle = {},
//   ...props
// }) => {
//   const flexFlow = `${direction.toLowerCase() === "row" ? "row" : "column"} nowrap`;
//   let flexGrow = 0;
//   if (typeof grow === "number")
//     flexGrow = grow;
//   else if (typeof grow === "boolean") {
//     flexGrow = grow ? 1 : 0;
//   }
//   const style = { ...divStyle, display: "flex", flexGrow, flexFlow };
//   return (
//     <div style={style} {...props}>{children}</div>
//   );
// }

// const Stack = ({ children, horizontal = false, ...props }) => {
//   const direction = horizontal ? "row" : "column";
//   return (
//     <Flex direction={direction} {...props}>
//       {children}
//     </Flex>
//   );
// }

// export default Stack