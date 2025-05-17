## Screen Descriptions: Whack-a-Mole

---

### Welcome Screen (`playing === false`)

- Displays the game title (`<h1>Whack a Mole</h1>`)
- Shows a welcome message and instructions
- Includes a **Play** button to start the game
  - Clicking the button calls `gameStart()`
- Displays a **High Scores** section:
  - Lists up to 5 scores, sorted from highest to lowest
  - If there are no scores yet, shows:
    `"None yet... Play the game!"`

---

### Game Screen (`playing === true`)

- Displays the same game title (`<h1>Whack a Mole</h1>`)
- Scoreboard section:
  - `Score: [current score]`
  - `Time: [current countdown]`
  - `Restart` button
    - Clicking this button calls `gameEnd()` and returns to the welcome screen
- 3x3 playing field (9 total holes):
  - One hole randomly displays a mole
  - Clicking the mole:
    1. Increments the score by 1
    2. Moves the mole to a new random position (0–8)
- The countdown timer starts at 15 seconds and decreases every second
  - When time reaches 0:
    - Calls `gameEnd()`
    - Score is evaluated

## State Variables: Whack-a-Mole

### playing

- Type: boolean
- Initial value: false
- Controls whether the game screen is shown (true) or the welcome screen (false)

---

### highScores

- Type: array of numbers
- Initial value: []
- Stores up to 5 highest scores
- Sorted from highest to lowest
- Updated at the end of each game if the current score qualifies

---

### score

- Type: number
- Initial value: 0
- Tracks the number of successful mole clicks during the current game

---

### time

- Type: number
- Initial value: 15
- Countdown timer in seconds
- Decrements every second while the game is active

---

### molePosition

- Type: number
- Initial value: random number between 0 and 8
- Indicates the current index of the mole in the 3x3 grid

## Function Plan: Whack-a-Mole

### gameStart()

- Sets:
  - playing = true
  - score = 0
  - time = 15
  - molePosition = random number between 0–8
- Starts a countdown timer with setInterval:
  - Every 1000ms: decrement time by 1
  - When time === 0, call gameEnd()

---

### gameEnd()

- Sets playing = false
- If highScores has fewer than 5 scores, or score is higher than the lowest:
  - Add score to highScores array
  - Sort highScores in descending order
  - Trim highScores to max 5 entries

---

### whack()

- Increment score by 1
- Set molePosition to a new random number between 0–8
- Triggers re-render of holes with updated mole position
