import { render, screen } from "@testing-library/react";
import Counter from "./index.tsx";

/**
 *  Counter 컴포넌트에 주입할 props
 */
const CounterProps = {
  count: 0,
  onIncrease: jest.fn(),
  onDecrease: jest.fn(),
};

describe('<Counter />', () => {
  test('화면에 텍스트가 보이는지', () => {
    render(<Counter {...CounterProps} />);

    const text = screen.getByText('Counter'); // 정규표현식 사용 가능
    expect(text).toBeInTheDocument();
  });

  test('증가 버튼을 클릭했을 때 onIncrease 함수가 실행되는지 테스트', () => {
    render(<Counter {...CounterProps} />);

    // getByRole: 컴포넌트에서 Element를 가져오는 메소드.
    // button 태그의 name이 증가인 엘리먼트를 가져온다.
    const button = screen.getByRole('button', { name: '증가' });
    button.click();
    expect(CounterProps.onIncrease).toHaveBeenCalled();
  });
});