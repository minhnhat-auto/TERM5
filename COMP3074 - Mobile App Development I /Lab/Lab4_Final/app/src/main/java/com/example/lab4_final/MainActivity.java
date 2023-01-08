package com.example.lab4_final;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity implements MovieFragment.MovieListListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        DetailFragment dF = DetailFragment.newInstance("0");
        getSupportFragmentManager().beginTransaction()
                .replace(R.id.details_fragment,dF ).commit();

    }

    @Override
    public void onItemClick(int pos) {
        DetailFragment dF = DetailFragment.newInstance(String.valueOf(pos));
        getSupportFragmentManager().beginTransaction()
                .replace(R.id.details_fragment,dF ).commit();

    }
}