import { supabase } from '../config/supabase.js';

// Sync User Details
export const syncUserDetails = async (req, res) => {
  try {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Check if user exists
    let { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
       return res.status(500).json({ error: fetchError.message });
    }

    if (!existingUser) {
      // Create new user
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([{ email, name }])
        .select()
        .single();
        
      if (insertError) return res.status(500).json({ error: insertError.message });
      return res.status(201).json(newUser);
    }
    
    return res.status(200).json(existingUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// Save Chat Message
export const saveChatHistory = async (req, res) => {
  try {
    const { user_email, role, content } = req.body;
    
    if (!user_email || !role || !content) {
       return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const { data, error } = await supabase
      .from('chat_history')
      .insert([{ user_email, role, content }]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Chat history saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// Retrieve Chat History
export const getChatHistory = async (req, res) => {
  try {
    const { email } = req.params;
    
    const { data, error } = await supabase
      .from('chat_history')
      .select('*')
      .eq('user_email', email)
      .order('created_at', { ascending: true });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
