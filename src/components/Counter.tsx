import { useState, type FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut } from '../store/actions/authActions'
import { decrement, increment, reset, setValue } from '../store/actions/counterActions'
import type { AppDispatch, RootState } from '../store/store'
import styles from './Counter.module.css'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const userName = useSelector((state: RootState) => state.auth.userName)
  const dispatch = useDispatch<AppDispatch>()
  const [customValue, setCustomValue] = useState('')
  const [name, setName] = useState('')

  function handleSetValue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = Number(customValue)
    if (customValue.trim() && Number.isFinite(value)) {
      dispatch(setValue(value))
      setCustomValue('')
    }
  }

  function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedName = name.trim()
    if (trimmedName) {
      dispatch(signIn(trimmedName))
      setName('')
    }
  }

  return (
    <section className={styles.workspace} aria-label="Redux counter">
      <div className={styles.counterPanel}>
        <div className={styles.counterHeading}>
          <div>
            <p className={styles.label}>Shared state</p>
            <h2>Counter</h2>
          </div>
          <span className={styles.stateTag}>counter.value</span>
        </div>

        <output className={styles.value} aria-live="polite" aria-label="Counter value">
          {count}
        </output>

        <div className={styles.counterControls}>
          <button className={styles.secondaryButton} onClick={() => dispatch(decrement())} aria-label="Decrement counter">
            −
          </button>
          <button className={styles.primaryButton} onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button className={styles.secondaryButton} onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>

        <form className={styles.setForm} onSubmit={handleSetValue}>
          <label htmlFor="custom-value">Set a specific value</label>
          <div className={styles.inputRow}>
            <input
              id="custom-value"
              type="number"
              step="any"
              value={customValue}
              onChange={(event) => setCustomValue(event.target.value)}
              placeholder="Enter a number"
            />
            <button className={styles.darkButton} type="submit" disabled={!customValue.trim()}>
              Set value
            </button>
          </div>
        </form>
      </div>

      <aside className={styles.authPanel}>
        <div>
          <p className={styles.label}>Second reducer</p>
          <h2>Session</h2>
        </div>
        {userName ? (
          <div className={styles.sessionState}>
            <p>Signed in as <strong>{userName}</strong></p>
            <button className={styles.textButton} onClick={() => dispatch(signOut())}>
              Sign out
            </button>
          </div>
        ) : (
          <form className={styles.signInForm} onSubmit={handleSignIn}>
            <label htmlFor="user-name">Try the auth reducer</label>
            <input
              id="user-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
            <button className={styles.darkButton} type="submit" disabled={!name.trim()}>
              Sign in
            </button>
          </form>
        )}
      </aside>
    </section>
  )
}

export default Counter