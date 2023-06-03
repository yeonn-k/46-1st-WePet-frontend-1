import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const [signInfo, setSignInfo] = useState({ email: '', password: '' })
  const [checkError, setCheckError] = useState({
    email: false,
    password: false,
  })
  const [isValid, setIsValid] = useState(false)

  const signIn = () => {
    fetch('https://reqres.in/api/loign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: signInfo.email,
        password: signInfo.password,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.success === true) {
          localStorage.setItem('TOKEN', response.data.accessToken) //여기바꾸고
          navigate('/main')
        } else {
          alert('로그인에 실패하셨습니다.')
        }
      })
  }

  const infoValids = {
    email: signInfo.email !== '',
    password: signInfo.password !== '',
  }

  const handleSignInfo = e => {
    const { name, value } = e.target
    setSignInfo(prev => ({ ...prev, [name]: value }))
    setCheckError(prev => {
      if (value === '') {
        return { ...prev, [name]: true }
      } else {
        return { ...prev, [name]: false }
      }
    })
  }

  useEffect(() => {
    setIsValid(signInfo.email && signInfo.password)
  }, [signInfo])

  return (
    <div className="wePetContainer">
      <div className="signIn">
        <h1 className="loginTitle">로그인</h1>
        <ul className="loginInputContainer">
          {LOGIN_INPUT.map(info => {
            return (
              <React.Fragment key={info.id}>
                <li className="inputBox">
                  <input
                    autoFocus={true}
                    className={
                      !infoValids[info.name] && checkError[info.name]
                        ? 'inputError'
                        : 'input'
                    }
                    type={info.type}
                    placeholder={info.placeholder}
                    name={info.name}
                    onChange={handleSignInfo}
                  />
                </li>
                {!infoValids[info.name] && checkError[info.name] && (
                  <p className="errorMsg">{info.error}</p>
                )}
              </React.Fragment>
            )
          })}
        </ul>
        <div className="saveEmail">
          <label>
            <span>
              <input type="checkbox" />
              아이디저장
            </span>
          </label>
        </div>
        <button
          className={`loginBtn ${isValid ? 'valid' : ''}`}
          onClick={signIn}
          disabled={!isValid}
        >
          로그인
        </button>
        <div className="toSignUpBox">
          <a className="toSignUp">회원가입</a>
        </div>
      </div>
    </div>
  )
}

export default Login

const LOGIN_INPUT = [
  {
    id: 1,
    type: 'text',
    placeholder: '이메일',
    name: 'email',
    error: '이메일을 입력해주세요',
  },
  {
    id: 2,
    type: 'password',
    placeholder: '비밀번호',
    name: 'password',
    error: '비밀번호를 입력해주세요',
  },
]
