import TableRow from "./tableRow.tsx";
import { Col, Row, Table } from "react-bootstrap";
import { getColumnProps } from '../utils/lotteryConfig';

interface Props {
  numbers: number[][];
}

function LotteryTable({ numbers }: Props) {
  const chunkedNumbers = [];

  for (let i = 0; i < numbers.length; i += 10) {
    chunkedNumbers.push(numbers.slice(i, i + 10));
  }

  const columnProps = getColumnProps(chunkedNumbers.length);

  return (
      <Row className="data">
        {chunkedNumbers.map((chunk, chunkIndex) => (
            <Col key={chunkIndex} className="p-3"  {...columnProps}>
              <div className="shadow bg-body-tertiary rounded mb-2 p-2">
                <Table striped bordered hover className="mb-0">
                  <tbody>
                  {chunk.map((group, groupIndex) => (
                      <TableRow
                          key={Math.random()}
                          index={chunkIndex * 10 + groupIndex}
                          numbers={group}
                      />
                  ))}
                  </tbody>
                </Table>
              </div>
            </Col>
        ))}
      </Row>
  );
}
export default LotteryTable;
