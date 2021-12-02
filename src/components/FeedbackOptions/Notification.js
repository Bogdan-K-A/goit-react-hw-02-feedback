import PropTypes from 'prop-types'

export const Notification = ({ message = '' }) => (
  <>{message && <h4>{message}</h4>}</>
)

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
