import type { Snack } from '~/types/snack'

export const useSnack = () => {
  const queue = useState<Snack[]>('snackbarQueue', () => [])

  const snack = ({ text, timeout, keepOpen, actions } : Snack) => {
    const first = queue.value[0]

    const received = {
      text,
      timeout: timeout || 1000 * 4,
      keepOpen: keepOpen !== undefined,
      actions,
    } as Snack

    // update first from queue if the one received has the same text
    if (first && first.text === received.text) {
      queue.value[0] = received
    } else {
      queue.value.push(received)
    }
  }

  return {
    queue,
    snack,
  }
}
