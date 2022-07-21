import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

// import styles from './Button.module.scss';
function Button({ primary, secondary, size, rounded, className, leftIcon, topIcon, children, to, href, ...passProps }) {
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
        leftIcon && styles.left__icon
      } ${topIcon && styles.top__icon}
      ${primary && styles.primary} ${secondary && styles.secondary}
      ${styles[className]}`}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {topIcon && <span>{topIcon}</span>}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
