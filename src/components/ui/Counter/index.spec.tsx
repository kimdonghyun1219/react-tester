import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Counter from './index.tsx';

describe('<Counter />', () => {
  it('화면에 텍스트가 보이는지', () => {
    render(<Counter />);

    const text = screen.getByText('Counter'); // 정규표현식 사용 가능
    expect(text).toBeInTheDocument();
  });

  it('증가 버튼을 클릭했을 때 값이 증가하는지', async () => {
    const { getByRole, getByText } = render(<Counter />);
    const increaseButton = getByRole('button', { name: '증가' });

    // count를 3번 증가시킴
    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);

    // count가 3인지 확인
    expect(getByText('3')).toBeInTheDocument();

    // .toHaveBeenCalledTimes(number) 몇번 실행되었는지  -> repeat test
  });
});
