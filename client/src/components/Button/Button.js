import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

// import styles from './Button.module.scss';
function Button({
  imgLeft,
  onClick,
  avtRight,
  avtLeft,
  primary,
  secondary,
  size,
  rounded,
  className,
  leftIcon,
  topIcon,
  children,
  to,
  href,
  ...passProps
}) {
  const props = { ...passProps };
  let Comp = 'button';

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp
      className={`${styles.button} ${rounded ? styles.rounded : ''} ${size ? styles[size] : ''} ${
        leftIcon ? styles.left__icon : ''
      } ${topIcon ? styles.top__icon : ''}
      ${primary ? styles.primary : ''} ${secondary ? styles.secondary : ''}
      ${styles[className]}
      ${avtLeft ? styles.avt__left : ''}
      ${avtRight ? styles.avt__right : ''}
      ${imgLeft ? styles.img__left : ''}
      `}
      onClick={onClick}
      {...props}
    >
      {avtLeft && <span>{avtLeft}</span>}
      {leftIcon && <span>{leftIcon}</span>}
      {topIcon && <span>{topIcon}</span>}
      {imgLeft && <img src={imgLeft} alt="img" />}
      <div>{children}</div>
      {avtRight && <img src={avtRight} alt="icon" />}
    </Comp>
  );
}

export default Button;
