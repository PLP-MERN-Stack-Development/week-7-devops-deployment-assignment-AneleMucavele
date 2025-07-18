export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      {/* Header with login button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd'
      }}>
        <h1 style={{ margin: 0 }}>Developers System</h1>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0366d6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </div>

      {/* Main content area */}
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        {/* Left sidebar dashboard */}
        <div style={{
          width: '250px',
          backgroundColor: '#24292e',
          color: 'white',
          padding: '1rem'
        }}>
          <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '0.5rem' }}>Dashboard</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', cursor: 'pointer' }}>GitHub</li>
            <li style={{ padding: '0.5rem 0', cursor: 'pointer' }}>CI/CD</li>
            <li style={{ padding: '0.5rem 0', cursor: 'pointer' }}>Tasks</li>
            <li style={{ padding: '0.5rem 0', cursor: 'pointer' }}>Settings</li>
          </ul>
        </div>

        {/* Main dashboard content */}
        <div style={{ flex: 1, padding: '1rem 2rem', overflowY: 'auto' }}>
          {/* GitHub Activities Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h2>GitHub Activities</h2>
            <div style={{
              border: '1px solid #ddd',
              borderRadius: '6px',
              padding: '1rem',
              backgroundColor: '#f6f8fa'
            }}>
              <h3>Recent Commits</h3>
              <ul>
                <li>Fixed bug in login component - 10 minutes ago</li>
                <li>Updated README.md - 2 hours ago</li>
                <li>Implemented CI/CD pipeline - 5 hours ago</li>
              </ul>
              
              <h3 style={{ marginTop: '1rem' }}>Recent Logs</h3>
              <pre style={{
                backgroundColor: '#24292e',
                color: 'white',
                padding: '1rem',
                borderRadius: '6px',
                overflowX: 'auto'
              }}>
                <code>
                  [2023-11-15 10:23:45] INFO: Build successful<br />
                  [2023-11-15 09:45:12] WARNING: Deprecated API used<br />
                  [2023-11-15 08:30:00] ERROR: Failed to fetch dependencies<br />
                </code>
              </pre>
            </div>
          </div>

          {/* CI/CD Pipeline Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h2>CI/CD Pipeline</h2>
            <div style={{
              border: '1px solid #ddd',
              borderRadius: '6px',
              padding: '1rem',
              backgroundColor: '#f6f8fa'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <span>Recent Pipeline: #1234</span>
                <span style={{ color: '#28a745' }}>Success</span>
              </div>
              <div style={{
                display: 'flex',
                height: '40px',
                backgroundColor: '#e1e4e8',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '25%',
                  backgroundColor: '#28a745',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white'
                }}>Build</div>
                <div style={{
                  width: '25%',
                  backgroundColor: '#28a745',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white'
                }}>Test</div>
                <div style={{
                  width: '25%',
                  backgroundColor: '#28a745',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white'
                }}>Deploy</div>
                <div style={{
                  width: '25%',
                  backgroundColor: '#28a745',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white'
                }}>Verify</div>
              </div>
            </div>
          </div>

          {/* Task Board Section */}
          <div>
            <h2>Task Board</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}>
              {/* To Do Column */}
              <div style={{
                border: '1px solid #ddd',
                borderRadius: '6px',
                padding: '1rem',
                backgroundColor: '#f6f8fa'
              }}>
                <h3 style={{ marginTop: 0 }}>To Do</h3>
                <div style={{
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  Implement user authentication
                </div>
                <div style={{
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  Write unit tests
                </div>
              </div>

              {/* In Progress Column */}
              <div style={{
                border: '1px solid #ddd',
                borderRadius: '6px',
                padding: '1rem',
                backgroundColor: '#f6f8fa'
              }}>
                <h3 style={{ marginTop: 0 }}>In Progress</h3>
                <div style={{
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  CI/CD pipeline setup
                </div>
              </div>

              {/* Done Column */}
              <div style={{
                border: '1px solid #ddd',
                borderRadius: '6px',
                padding: '1rem',
                backgroundColor: '#f6f8fa'
              }}>
                <h3 style={{ marginTop: 0 }}>Done</h3>
                <div style={{
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  Project setup
                </div>
                <div style={{
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  UI design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}