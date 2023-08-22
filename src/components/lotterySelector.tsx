import React from 'react';
import { LOTTERY_TYPES } from '../utils/lotteryConfig';
import { Form, Button, Col, Row } from 'react-bootstrap';
interface Props {
  onSelect: (pick: number, total: number, sets: number) => void;
}

function LotterySelector({ onSelect }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const typeKey = formData.get("type") as string;

    const lotteryType = LOTTERY_TYPES.find(type => type.key === typeKey);
    if (!lotteryType) return;

    const sets = Number(formData.get("sets"));
    onSelect(lotteryType.pick, lotteryType.total, sets);
  };

  return (
      <Row className="justify-content-md-center">
        <Form onSubmit={handleSubmit} className="col-6 p-4 m-4 shadow bg-body-tertiary rounded">
          <Form.Group as={Row} className="mb-2">
            <Form.Label column sm="8">
              Select the type of lottery:
            </Form.Label>
            <Col sm="4">
              <Form.Select as="select" name="type">
                {LOTTERY_TYPES.map(type => (
                    <option key={type.key} value={type.key}>
                      {type.label}
                    </option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="8">
              How many numbers do you want to generate?
            </Form.Label>
            <Col sm="4">
              <Form.Control type="number" name="sets" min="1" required defaultValue="10"/>
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Generate
          </Button>
        </Form>
      </Row>
  );
};

export default LotterySelector;
