// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: "ZvhttNGLOVlEpA3egh5AXbKw5vAzWcNj",
        client_secret: "EG98v6jaCcYZPKLb",
        callback_url: "http://localhost:8080/api/auth/callback"
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write','bucket:delete'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};
